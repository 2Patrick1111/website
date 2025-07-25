from flask import render_template, request, flash, redirect, url_for
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from app import app

@app.route('/')
def index():
    """Homepage route"""
    return render_template('kontakt.html', page_title='Kontakt')

@app.route('/team')
def team():
    """Team page route"""
    return render_template('team.html', page_title='Unser Team')

@app.route('/roi-calculator')
def roi_calculator():
    """ROI Calculator page route"""
    return render_template('roi-calculator.html', page_title='ROI-Rechner')

@app.route('/kontakt', methods=['GET', 'POST'])
def kontakt():
    """Contact page route"""
    if request.method == 'POST':
        # Get form data
        name = request.form.get('name')
        email = request.form.get('email')
        company = request.form.get('company', '')
        phone = request.form.get('phone')
        message = request.form.get('message')
        
        # Validate required fields
        if not name or not email or not phone or not message:
            flash('Bitte füllen Sie alle Pflichtfelder aus.', 'error')
            return render_template('kontakt.html', page_title='Kontakt')
        
        # Send email
        try:
            send_contact_email(name, email, company, phone, message)
            flash('Ihre Nachricht wurde erfolgreich versendet. Wir melden uns bald bei Ihnen!', 'success')
            return redirect(url_for('kontakt'))
        except Exception as e:
            flash('Ein Fehler ist aufgetreten beim E-Mail-Versand. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.', 'error')
            return render_template('kontakt.html', page_title='Kontakt')
    
    return render_template('kontakt.html', page_title='Kontakt')

def send_contact_email(name, email, company, phone, message):
    """Send contact form email via SMTP"""
    smtp_server = "smtp.strato.de"
    smtp_port = 587
    smtp_user = "info@ki-erfolgsschmiede.com"
    smtp_password = "Bauernhof007!"
    
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = f"AI Allstars Website <{smtp_user}>"
        msg['To'] = "info@ki-erfolgsschmiede.com"
        msg['Subject'] = f"Neue Kontaktanfrage von {name}"
        msg['Reply-To'] = email
        
        # Email body
        body = f"""Neue Kontaktanfrage über die Website:

Name: {name}
E-Mail: {email}
Unternehmen: {company if company else 'Nicht angegeben'}
Telefon: {phone}

Nachricht:
{message}

---
Diese E-Mail wurde automatisch über das Kontaktformular der AI Allstars Website generiert.
Sie können direkt auf diese E-Mail antworten, um mit {name} ({email}) in Kontakt zu treten.
"""
        
        msg.attach(MIMEText(body, 'plain', 'utf-8'))
        
        # Send email
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
            
    except Exception as e:
        raise e

@app.route('/datenschutz')
def datenschutz():
    """Privacy policy page route"""
    return render_template('datenschutz.html', page_title='Datenschutz')

@app.route('/impressum')
def impressum():
    """Imprint page route"""
    return render_template('impressum.html', page_title='Impressum')

@app.route('/appointment')
def appointment():
    """Appointment booking redirect to contact"""
    return render_template('kontakt.html', page_title='Strategiegespräch')
