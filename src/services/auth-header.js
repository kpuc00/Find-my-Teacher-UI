export default function authHeader() {

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjMwWi1QWk15ZURuZDFlTHdsa2Z2NEVBRWhtayIsImtpZCI6IjMwWi1QWk15ZURuZDFlTHdsa2Z2NEVBRWhtayJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE2MTA2MzMzMTAsIm5iZiI6MTYxMDYyNjExMCwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiZTQxZWY1OTEtODg4YS00M2U5LTk3NmMtOGQ5MGIxZDIxMTFhIiwiYXV0aF90aW1lIjoxNjEwNjI2MTA5LCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6Ikk0MjgyOTFAZmhpY3QubmwiLCJuYW1lIjoiVHN2ZXRrb3YsQWxleGFuZGVyIEEuWi4iLCJlbWFpbCI6ImEudHN2ZXRrb3ZAc3R1ZGVudC5mb250eXMubmwiLCJ1cm46bmwuZmhpY3Q6c2NoZWR1bGUiOiJjbGFzc3xTMy1DQjAyIiwiZm9udHlzX3VwbiI6IjQyODI5MUBzdHVkZW50LmZvbnR5cy5ubCIsImFtciI6WyJleHRlcm5hbCJdfQ.Z7XsV-yw3pFQalEPJxUWqQSuD0tMQUfDbATnG5X0ZAqV8NxtuHYyNBcX8q46bhRkIVQFMfSbrMEU_TxVnPm9iZrQE26zUGGLvEShc4_no9nzjnTIDVtEc-IO1dTw_QYK2XvSmtmFcm3m0hQ25dsnhUmxrPhzWLqybNWfrBsnNfQysiD2ssNrJDzrW2hCDjjLCFFv61moIeMPJA1tIME98khvBDcWoCXWxInfAwzBtcf2j8RMondNItxiVtMNcmqFX7uTUXWrtlYjCDolpkgPHget08mRqvcT9nh6PgFf1LcxyKba9z8lzH0223cuuZ4Tn9MgB4-9o9zo7yokMxwesg';
//const token = localStorage.getItem("my_token")
return {Authorization: 'Bearer ' + token};
}