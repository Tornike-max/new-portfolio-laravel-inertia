<html lang="en-US">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Email</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #0073e6;
        }

        p {
            margin-bottom: 15px;
        }

        .footer {
            margin-top: 20px;
            font-size: 0.9em;
            text-align: center;
            color: #777;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Hi, I,m {{$data['name']}}!</h1>
        <p>You have received a new message from your portfolio:</p>
        <blockquote style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #0073e6; margin: 15px 0;">
            {{$data['message']}}
        </blockquote>
        <p><strong>From:</strong> {{$data['email']}}</p>
        <p><strong>Phone Number:</strong> {{$data['phone']}}</p>
        <div class="footer">
            <p>Thank you for using my portfolio!</p>
        </div>
    </div>
</body>

</html>