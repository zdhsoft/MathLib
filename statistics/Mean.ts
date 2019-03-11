/**
 * 平均值
 */
 	/**
 	 * 初始化一个数列
 	 * @param {Array<number>} ...input [需要求平均值的数据]
 	 */
	function Mean([...input]:Array<number>){
		let total:number =0;
		for(let i of input){
			total+=i;
		}
		return total/input.length;
	}
export {Mean}