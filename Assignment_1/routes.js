const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body>");
    res.write("<h1>Hello to my first assignment!</h1>");
    res.write('<form action="/create-user" method="POST">');
    res.write('<input type="text" name="username"/>');
    res.write('<button type="submit">Send</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>User 1</li>");
    res.write("<li>User 2</li>");
    res.write("<li>User 3</li>");
    res.write("<li>User 4</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

module.exports = requestHandler;
