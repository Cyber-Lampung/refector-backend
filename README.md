# Feature Register

    1. Validasi Inputan check vuln => sql,lfi,rce
    2. check length password
    3. check email used ?
    4. hash session db
    5. hash password

# Feature Login

    1. Validasi Inputan check vuln => sql,lfi,rce
    2. check password length
    3. check validasi session
    4. check validasi role => next time

# Flow Endpoint

    ** Register **

    endpoint => "/api/register"
    method => "POST"
    content-type: "application/json"
    body: {
        "email": "userTest@gmail.com" => bisa all
        "username": "userTest"
        "password": "userTest" => ketika dikirim ke service nanti di hash
    }

    response succes => statusCode=201 {status: "succes", message: "succes created account"}

    error code => 1. inputan tadak valid
                  2. not empety fields (email, username, password)
                  3. password length < 8
