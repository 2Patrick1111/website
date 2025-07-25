# AI Allstars Website - replit.md

## Overview

This is a Flask-based website for AI Allstars, a company offering AI consulting services. The application is a static content website with multiple pages showcasing the company's services, team, and contact information. It features a modern design with glass morphism effects and responsive layouts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Template Engine**: Jinja2 templates with Flask
- **Base Template Pattern**: Uses template inheritance with `base.html` as the parent template
- **Styling**: Custom CSS with modern design principles including glass morphism effects
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Icons**: Font Awesome CDN for icons, custom SVG for logo

### Backend Architecture
- **Framework**: Flask (lightweight Python web framework)
- **Application Structure**: Simple MVC pattern
  - `app.py`: Application factory and configuration
  - `routes.py`: Route definitions and view functions
  - `main.py`: Application entry point
- **Session Management**: Flask sessions with configurable secret key
- **Environment Configuration**: Uses environment variables for production settings

### Key Components

1. **Application Factory (`app.py`)**
   - Creates Flask application instance
   - Configures session secret key from environment or fallback
   - Imports route definitions

2. **Routing System (`routes.py`)**
   - Homepage (`/`) - displays pricing page
   - Team page (`/team`)
   - Pricing page (`/preise`)
   - ROI Calculator (`/roi-calculator`)
   - Contact page (`/kontakt`)
   - Legal pages (`/datenschutz`, `/impressum`)
   - Appointment redirect (`/appointment` → contact page)

3. **Template System**
   - Base template with header/footer structure
   - Individual page templates extending base
   - Consistent navigation and branding

4. **Static Assets**
   - CSS for styling and animations
   - JavaScript for interactive functionality
   - Placeholder structure for images

## Data Flow

1. **Request Processing**: Flask receives HTTP requests and routes them to appropriate view functions
2. **Template Rendering**: View functions render Jinja2 templates with context data
3. **Static Asset Serving**: Flask serves CSS, JS, and image files from the static directory
4. **Response Generation**: Complete HTML pages are returned to the client

## External Dependencies

- **CDN Resources**:
  - Google Fonts (Sora, Inter)
  - Font Awesome 6.4.0 for icons
- **No Database**: Currently a static content site with no data persistence
- **No External APIs**: All functionality is client-side or template-based

## Deployment Strategy

- **Development Server**: Flask development server with debug mode
- **Host Configuration**: Configured to run on `0.0.0.0:5000` for container compatibility
- **Environment Variables**: 
  - `SESSION_SECRET`: Production session key
- **Static File Serving**: Flask handles static files in development
- **Production Considerations**: Would need proper WSGI server (Gunicorn/uWSGI) and reverse proxy (Nginx) for production deployment

## Technical Decisions

### Why Flask?
- **Problem**: Need lightweight web framework for content-heavy website
- **Solution**: Flask provides minimal overhead while supporting template rendering
- **Alternatives**: Django (too heavy), FastAPI (overkill for static content)
- **Pros**: Simple setup, flexible, good for static/semi-static sites
- **Cons**: Requires additional components for production deployment

### Template Inheritance
- **Problem**: Consistent layout across multiple pages
- **Solution**: Base template with block structure for content injection
- **Pros**: DRY principle, consistent navigation, easy maintenance
- **Cons**: None significant for this use case

### No Database Integration
- **Current State**: Static content only
- **Future Consideration**: Database integration (likely PostgreSQL) may be needed for:
  - Contact form submissions
  - ROI calculator data persistence
  - User management
  - Content management

### German Language Content
- **Decision**: All content and navigation in German
- **Rationale**: Target market appears to be German-speaking regions
- **Impact**: URLs use German terms (`kontakt`, `datenschutz`, `impressum`, `preise`)

## Recent Changes

### Pricing Page Implementation (July 2025)
- **Added**: New pricing page (`/preise`) with four AI-PASS course packages
- **Changed**: Homepage (`/`) now displays the pricing page as the main landing page
- **Features**: 
  - AI-PASS Gefördert (100% state-funded, €0)
  - AI-PASS Videokurs (Self-paced video course, €995)
  - AI-PASS Premium (Complete program without funding, €2,495)
  - AI-PASS Enterprise (Custom enterprise solution, on request)
- **Design**: Modern card-based layout with hover effects and responsive design
- **Navigation**: Added to main header, mobile menu, and footer navigation
- **Styling**: Custom CSS with glass morphism effects and smooth animations