from flask import render_template
from app import app

@app.route('/')
def index():
    """Homepage route - now shows pricing page"""
    return render_template('preise.html', page_title='AI Allstars - Preise & Pakete')

@app.route('/team')
def team():
    """Team page route"""
    return render_template('team.html', page_title='Unser Team')

@app.route('/roi-calculator')
def roi_calculator():
    """ROI Calculator page route"""
    return render_template('roi-calculator.html', page_title='ROI-Rechner')

@app.route('/kontakt')
def kontakt():
    """Contact page route"""
    return render_template('kontakt.html', page_title='Kontakt')

@app.route('/datenschutz')
def datenschutz():
    """Privacy policy page route"""
    return render_template('datenschutz.html', page_title='Datenschutz')

@app.route('/impressum')
def impressum():
    """Imprint page route"""
    return render_template('impressum.html', page_title='Impressum')

@app.route('/preise')
def preise():
    """Pricing page route"""
    return render_template('preise.html', page_title='Preise & Pakete')

@app.route('/appointment')
def appointment():
    """Appointment booking redirect to contact"""
    return render_template('kontakt.html', page_title='Strategiegespräch')
