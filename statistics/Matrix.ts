import "./vector";
import { Vector } from "./vector";
/**
 * 实现矩阵的加减以及逆运算
 */
class Matrix{
	row:number;
	col:number;
	data:Array<any>;
	//初始化二维矩阵
	/**
	 * 初始化矩阵
	 * @param {number} row [行数]
	 * @param {number} col [列数]
	 */
	constructor(row:number,col:number){
		this.row=row;//行
		this.col=col;//列
		this.data = Array(this.row);
		for(let i=0;i<this.row;i++){
			this.data[i] = new Array(this.col)
		}
	}
	/**
	 * 初始化为一个单位矩阵
	 */
	Indentity():any{
		for(let i=0;i<this.col;i++){
			for(let j=0;j<this.row;j++){
				if(i==j){
					this.data[i][j]=1;
				}else{
					this.data[i][j]=0;
				}
			}
		}
		return this;
	}
	/**
	 * 矩阵乘法
	 * @param  {Matrix} matrix [相乘矩阵]
	 * @return {Matrix}        [生成的新矩阵]
	 */
	product(matrix:Matrix):Matrix{
		let tempMatrix = new Matrix(this.row,matrix.col);
		if(matrix instanceof Matrix){
		if(this.col==matrix.row){
			for(let i=0;i<this.row;i++){
				for(let j=0;j<matrix.col;j++){
					tempMatrix.data[i][j]=0;
					for(let k=0;k<this.col;k++){
						tempMatrix.data[i][j] += this.data[i][k]*matrix.data[k][j];
					}
				}
			}
			return tempMatrix;
		}
	}

	}
	/**
	 * 元素对应乘积
	 * @param data 矩阵或者向量
	 */
	Hardamard(data:Matrix|Vector){
		if(data instanceof Matrix){
			let tempMatrix = new Matrix(data.row,data.col);
			for(let i=0;i<data.col;i++){
				for (let j = 0; j < data.row; j++) {
					tempMatrix[i][j] = this.data[i][j]*data.data[i][j];
				}
			}
			return (this,tempMatrix);
		}
		if(data instanceof Vector){
			let tempV = new Array(data.data.length);
			if(data.data.length==this.data.length){
				for(let i=0;i<data.data.length;i++){
					for(let j=0;j< this.row;j++){
						tempV[i] =  data.data[i]*this.data[i][j];
					}
				}
			}
			return (this,tempV);
		}
	}
	/**
	 * 矩阵迹运算
	 * @param  {Matrix} matrix [迹运算对象]
	 * @return {number}        [返回总和]
	 */
	Tr(matrix:Matrix):number{
		let total:number=0;
		for(let i=0;i<matrix.col;i++){
			for(let j=0;j<matrix.row;j++){
				if(i==j){
					total+=matrix[i][j];
				}
			}
		}
		return (this,total);
	}
	/**
	 * 将矩阵降维为数组
	 * @param  {Matrix}        matrix [需要降维的矩阵]
	 * @return {Array<number>}        [降维后返回的数组]
	 */
	downDimensionality(matrix:Matrix):Array<number>{
		let tempAry:Array<number>=[];
		if(matrix instanceof Matrix){
			for(let i=0;i<matrix.col;i++){
				for(let j=0;j<matrix.row;j++){
					tempAry.push(matrix[i][j]);
				}
			}
		}
		return (this,tempAry);
	}
	frobenius(A:Matrix){
		let tempNums:number=0;
		for(let i=0;i<A.row;i++){
			for(let j=0;j<A.col;j++){
				tempNums+= A.data[i][j]**2
			}
		}
		return tempNums**(1/2);
	}
}
export {Matrix};