import turtle
import time

# Set up the screen
screen = turtle.Screen()
screen.setup(width=600, height=800)
screen.bgcolor("black")
screen.title("Breakout")
screen.tracer(0)

# Create the paddle
paddle = turtle.Turtle()
paddle.shape("square")
paddle.shapesize(stretch_wid=1, stretch_len=5)
paddle.color("white")
paddle.penup()
paddle.goto(0, -350)

# Create the ball
ball = turtle.Turtle()
ball.shape("circle")
ball.color("white")
ball.penup()
ball.goto(0, -300)

# Set up the game variables
score = 0
pen = turtle.Turtle()
pen.color("white")
pen.penup()
pen.hideturtle()
pen.goto(0, 350)
pen.write(f"Score: {score}", align="center", font=("Courier", 20, "normal"))

ball.dx = 0.3
ball.dy = 0.3

# Create the bricks
bricks = []
num_bricks = 5
brick_y = 200
colors = ["blue", "green", "yellow", "orange", "red"]
for i in range(num_bricks):
    brick_x = -200
    color = colors[i]
    for j in range(10):
        brick = turtle.Turtle()
        brick.shape("square")
        brick.color(color)
        brick.shapesize(stretch_wid=1, stretch_len=4)
        brick.penup()
        brick.goto(brick_x, brick_y)
        bricks.append(brick)
        brick_x += 80
    brick_y -= 40

# Paddle movement
def move_left():
    x = paddle.xcor()
    if x > -250:
        x -= 20
    paddle.setx(x)

def move_right():
    x = paddle.xcor()
    if x < 250:
        x += 20
    paddle.setx(x)

# Keyboard bindings
screen.listen()
screen.onkeypress(move_left, "Left")
screen.onkeypress(move_right, "Right")

# Main game loop
while True:
    screen.update()

    # Move the ball
    ball.setx(ball.xcor() + ball.dx)
    ball.sety(ball.ycor() + ball.dy)

    # Check for border collisions
    if ball.ycor() > 390:
        ball.sety(390)
        ball.dy *= -1

    if ball.ycor() < -390:
        ball.goto(0, -300)
        ball.dy *= -1
        score = 0
        pen.clear()
        pen.write(f"Score: {score}", align="center", font=("Courier", 20, "normal"))

    if ball.xcor() > 290 or ball.xcor() < -290:
        ball.dx *= -1

    # Check for paddle collision
    if ball.ycor() < -340 and ball.ycor() > -350 and (ball.xcor() < paddle.xcor() + 50 and ball.xcor() > paddle.xcor() - 50):
        ball.dy *= -1

    # Check for brick collision
    for brick in bricks:
        if ball.distance(brick) < 40:
            brick.goto(-1000, -1000)
            ball.dy *= -1
            bricks.remove(brick)
            score += 10
            pen.clear()
            pen.write(f"Score: {score}", align="center", font=("Courier", 20, "normal"))

    # Check for game over
    if ball.ycor() < -390 and len(bricks) > 0:
        time.sleep(1)
        ball.goto(0, -300)
        ball.dy *= -1
        score = 0
        pen.clear()
        pen.write(f"Score: {score}", align="center", font=("Courier", 20, "normal"))
        for brick in bricks:
            brick.goto(brick.xcor(), brick.ycor() + 500)
        bricks.clear()
        for i in range(num_bricks):
            brick_x = -200
            color = colors[i]
            for j in range(10):
                brick = turtle.Turtle()
                brick.shape("square")
                brick.color(color)
                brick.shapesize(stretch_wid=1, stretch_len=4)
                brick.penup()
                brick.goto(brick_x, brick_y)
                bricks.append(brick)
                brick_x += 80
            brick_y -= 40

    # Check for game win
    if len(bricks) == 0:
        pen.clear()
        pen.write("YOU WIN!", align="center", font=("Courier", 30, "normal"))
        time.sleep(3)
        turtle.bye()
