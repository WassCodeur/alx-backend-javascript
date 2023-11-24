function calculateNumber(a, b, type){
if (type === 'SUM'){
   const result = (Math.round(a) + Math.round(b))
   return (result)
}
else if(type === 'SUBTRACT'){
	const result = (Math.round(a) - Math.round(b))
	return (result)
} else if(type === 'DIVIDE') {
	if(Math.round(b) === 0){
		return ('Error')
	} else {
		const result = (Math.round(a) / Math.round(b))
		return result
	}
}


