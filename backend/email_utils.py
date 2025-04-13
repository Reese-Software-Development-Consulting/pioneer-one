import smtplib
import os

def send_email(name, sender_email, message):
    EMAIL_USER = os.getenv('EMAIL_USER')
    EMAIL_PASS = os.getenv('EMAIL_PASS')
    RECEIVER_EMAIL = os.getenv('RECEIVER_EMAIL')

    subject = "New Contact Form Submission"
    body = f"From: {name} <{sender_email}>\n\n{message}"
    email_text = f"Subject: {subject}\n\n{body}"

    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.starttls()
        smtp.login(EMAIL_USER, EMAIL_PASS)
        smtp.sendmail(EMAIL_USER, RECEIVER_EMAIL, email_text)