// for - in loop > for objects

const person = {
name: 'Surbhi',
age: 28
};

for(let key in person)
{
    console.log(key, person[key]);
}

// Array

const colors = ['red', 'blue', 'green', 'white', 'black', 'yellow', 'orange'];
for(let index in colors)
{
    console.log(index, colors[index]);
}

//for - of: is used to get the values from array

for(let col of colors)
{
    console.log(col);
}

//break and continue: Whenever condition is satisfied i want to break the loop 