import requests

url = "http://127.0.0.1:5000/predict"

files = {
    "image": open("dataset\Brown_spot\Brown_spot (12).jpg", "rb")
}

response = requests.post(url, files=files)

print(response.json())