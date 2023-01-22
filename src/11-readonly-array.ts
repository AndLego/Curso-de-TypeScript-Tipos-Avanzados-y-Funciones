const numbers: ReadonlyArray<number> = [1, 2, 3, 1, 2, 1]
numbers.push(9)//errores
numbers.pop()//errores
numbers.unshift(0)//errores

numbers.filter(() => { })
numbers.reduce(() => 0)
numbers.map(()=> 0)
