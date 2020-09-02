import './app1.css'
import $ from 'jquery'

const $add = $('#add')
const $minus = $('#minus')
const $multiply = $('#multiply')
const $divide = $('#divide')
const $result = $('#result')
const n = localStorage.getItem('n')  // 读取localStorage
$result.text(n || 100)

$add.on('click',()=>{
    let n = parseInt($result.text())  // 获取text内容,转换为数值
    n += 1
    localStorage.setItem('n',n)   // 存入localStorage
    $result.text(n)  // 修改text内容
}) 
$minus.on('click',()=>{
    let n = parseInt($result.text())  
    n -= 1
    localStorage.setItem('n',n)
    $result.text(n)  
}) 
$multiply.on('click',()=>{
    let n = parseInt($result.text())  
    n *= 2
    localStorage.setItem('n',n)
    $result.text(n)  
}) 
$divide.on('click',()=>{
    let n = parseInt($result.text())  
    n /= 2
    localStorage.setItem('n',n)
    $result.text(n)  
}) 