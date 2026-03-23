export const config = {
  // Only run middleware on the main html pages, not on images/css/js
  matcher: ['/((?!api|_next/static|_next/image|assets|.*\\.png$|.*\\.jpg$|.*\\.ico$).*)'],
};

export default function middleware(request) {
  // Get the current date and time in UTC
  const now = new Date();
  const day = now.getUTCDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = now.getUTCHours();

  console.log(`Access attempt at UTC Day: ${day}, UTC Hour: ${hour}`);

  // Check if it is Monday (1) through Friday (5)
  const isWeekday = day >= 1 && day <= 5;
  
  // Check if the hour is between 3 AM and 8:59 AM UTC
  const isWorkingHour = hour >= 3 && hour < 9;

  // If outside the active window, block access
  if (!isWeekday || !isWorkingHour) {
    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Portfolio Offline</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
              background: #0f172a; 
              color: #f8fafc; 
              display: flex; 
              align-items: center; 
              justify-content: center; 
              height: 100vh; 
              margin: 0; 
              text-align: center;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              background: #1e293b;
              padding: 40px;
              border-radius: 16px;
              box-shadow: 0 10px 25px rgba(0,0,0,0.5);
              border: 1px solid #334155;
            }
            h1 { color: #38bdf8; margin-bottom: 20px;}
            p { font-size: 1.1rem; line-height: 1.6; color: #cbd5e1; }
            b { color: #f8fafc; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Portfolio is Offline 💤</h1>
            <p>This portfolio is only accessible from <b>Monday to Friday</b> between <b>3:00 AM and 9:00 AM UTC</b>.</p>
            <p>Please come back during my active hours!</p>
          </div>
        </body>
      </html>
      `,
      {
        status: 503,
        headers: { 'content-type': 'text/html' }
      }
    );
  }
}
