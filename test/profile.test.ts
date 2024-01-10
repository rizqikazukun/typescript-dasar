describe('profile', () => {
	it('should be same with', () => {
	  
	  interface Greeting {
				  name: string
		  hello(role: string): string
	  }
  
	  const greeting: Greeting = {
		  name: 'Rizqi Pratama',
		  hello: function (role: string): string {
		  let message = ''
		  message += `Hello, I Am ${this.name}, `
		  message += `I Am a ${role} Developer`
		  return message
		  }
	  }
  
	  expect(greeting.hello('Backend')).toBe('Hello, I Am Rizqi Pratama, I Am a Backend Developer')
	  expect(greeting.hello('Fullstack')).toBe('Hello, I Am Rizqi Pratama, I Am a Fullstack Developer')
  
	})
  })

// Expected output:
// Hello, I Am Rizqi Pratama, I Am a Backend Developer 
// or
// Hello, I Am Rizqi Pratama, I Am a Fullstack Developer 