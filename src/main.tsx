import * as React from "react";
import { render } from "react-dom";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

class AppComponent extends React.Component<any, any> {
	public render () {
		const data = [
			{
				name: 1,
				cws: 1000,
				ttws: 100,
			},
			{
				name: 2,
				cws: 1000,
				ttws: 100,
			},
			{
				name: 3,
				cws: 1000,
				ttws: 100,
			}
		];
		return (
			<div>
				<ResponsiveContainer height={100} width={100}>
					<BarChart data={ data } >
						<XAxis dataKey="name"/>
						<Bar dataKey="cws" stackId="a" fill="#03a9f4" isAnimationActive={false}/>
						<Bar dataKey="ttws" stackId="a" fill="#e65100" isAnimationActive={false}/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		)
	}
}

render(<AppComponent />, document.getElementById("mApp"));
