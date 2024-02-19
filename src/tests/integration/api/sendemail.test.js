test("Request to send email should return 500 with no environment variables set", async () => {
  const response = await fetch("http://localhost:3000/api/sendemail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: "first",
      lastName: "last",
      email: "test@gmail.com",
      message: "test",
    }),
  });

  expect(response.status).toBe(500);
});
