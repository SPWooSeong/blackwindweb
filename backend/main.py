from fastapi import FastAPI
from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware

class inputData1(BaseModel):
    name : str
    email : str
    id : str
    password :str

class inputData2(BaseModel):
    id : str
    password : str



database = {}

app = FastAPI()
@app.get("/")
async def main():
    return "Hello world"


@app.post("/register")
async def register(register_body : inputData1):
    global database
    database['name'] = register_body.name
    database['email'] = register_body.email
    database['id'] = register_body.id
    database['password'] = register_body.password

    return f'welcom hpjs {register_body.id}'

@app.post("/login")
async def login(body: inputData2):
    # return database

    if (body.id == database.get('id')) and (body.password == database.get("password")):
        return "Successfully entered"
    else:
        return "ID or Password is incorrect"

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
