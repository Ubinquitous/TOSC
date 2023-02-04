import React, { useState } from 'react'
import { flushSync } from 'react-dom'
import './App.scss'

const App = () => {
	const [code, setCode] = useState('')
	const [newCode, setNewCode] = useState('')
	const [isLoad, setIsLoad] = useState(false)

	const toStyledComponents = () => {
		setNewCode(
			code.replace(/\./gi, 'export const ').replace(/#/gi, 'export const ').replace(/ {/gi, ' = styled.div`').replace(/}/gi, '`').replace(/_/gi, '')
		)
	}

	return (
		<div id="container">
			<div className="containers">
				<span className="title-text">스타일드 컴포넌트로 바꿀 코드를 입력하세요</span>
				<textarea className="editor" onChange={(e) => setCode(e.target.value)} value={code} />
				<button className="change-button" onClick={toStyledComponents}>
					변경
				</button>
			</div>
			<div className="containers">
				<div className="viewer">{!isLoad ? newCode : ''}</div>
			</div>
		</div>
	)
}

export default App
