export default function authHeader() {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjMwWi1QWk15ZURuZDFlTHdsa2Z2NEVBRWhtayIsImtpZCI6IjMwWi1QWk15ZURuZDFlTHdsa2Z2NEVBRWhtayJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE2MDY4MjY1NzEsIm5iZiI6MTYwNjgxOTM3MSwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiNDNmMGMwYzktNzcyNC00NDU5LTlmMjgtMDU3ODZiMGZmYjI0IiwiYXV0aF90aW1lIjoxNjA2ODE5MzcwLCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6Ikk0MjgzMjlAZmhpY3QubmwiLCJuYW1lIjoiVmVsaWtvdixWYXNpbCBWLlouIiwiZW1haWwiOiJ2LnZlbGlrb3ZAc3R1ZGVudC5mb250eXMubmwiLCJ1cm46bmwuZmhpY3Q6c2NoZWR1bGUiOiJjbGFzc3xTMy1DQjAyIiwiZm9udHlzX3VwbiI6IjQyODMyOUBzdHVkZW50LmZvbnR5cy5ubCIsImFtciI6WyJleHRlcm5hbCJdfQ.IN1ye_ic1-BdA-nA8GH12u_QsN7-p75g1EBHJVCCH51P5_Vz5qkR4GLdVEyciwBxM8ZcWXjTOn2Nw6tVwxc05jRoKqVx4J4142zD1WrYVrUaELL1codusufGaiSk4FRRTHLiFg3dhWgwwwKqtVyIYoMV8QAW5Z290tttr1qRFpjbGJl6YP8B1xuVein3roVN4_n79BITwjr76b7G756-_2Hw96dyDLDEy09_2befdC7padEqyxnPEV4ZmBfuQ2nWolAGSuwD-Z6d_RQUdtvPCDcfUt_PIvwv7WImdsx6GukvRDf6CKLkkAA846bI2QT0hazQXmLU0xz598jHnFbpGQ"
    return {Authorization: 'Bearer ' + token};
}