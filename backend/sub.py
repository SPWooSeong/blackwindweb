from typing import Optional
from pydantic import BaseModel
from fastapi import FastAPI
from sqlmodel import Field, Session, SQLModel, create_engine, select
from fastapi.middleware.cors import CORSMiddleware



class MemberData(SQLModel, table=True):
    Num: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    email : str
    id: str = Field(index=True)
    password: str

class InputData(BaseModel):
    id : str
    password : str



sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, echo=True, connect_args=connect_args)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def check_id_exists(session: Session, id_to_check: str) -> bool:
    # value_to_check가 MemberData 테이블의 id 필드에 있는지 확인
    result1 = session.exec(select(MemberData.id).where(MemberData.id == id_to_check)).first()
    if result1 != None:
        return True
    else:
        return False


app = FastAPI()


@app.on_event("startup")
def on_startup():
    create_db_and_tables()


@app.post("/register")
def register_member(member: MemberData):
    with Session(engine) as session:
        session.add(member)
        session.commit()
        session.refresh(member)
        return f"welcome to hpjs {member.id}"

@app.post("/login")
async def login(body: InputData):
    with Session(engine) as session:
        exist = check_id_exists(session, body.id)
        if exist:
            right_pass = session.exec(select(MemberData.password).where(MemberData.id == body.id)).first()
            if (right_pass == body.password):
                return f"Successfully entered {body.id}"
            else:
                return "ID or Password is incorrect"
        else:
            return "ID or Password is incorrect"


@app.get("/members")
def read_members():
    with Session(engine) as session:
        members = session.exec(select(MemberData)).all()
        return members
    


origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3000/register"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
