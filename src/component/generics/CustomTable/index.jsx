import React from 'react';
import { Wrapper } from './style';
import Cell from './Cell';
import { Loader } from '../../Loader/Loader';
const Table = ({ column, rowData, clickRow, loading }) => {
	const clickRowFunction = () => {
		clickRow && clickRow();
	};
	return (
		<Wrapper>
			<Wrapper.Header>
				{column?.map((v, i) => {
					const { headerName, flex, width } = v;
					return (
						<Wrapper.Column
							width={width}
							flex={flex}
							key={i}
							last={column?.length === i + 1}
						>
							<Wrapper.HeaderTitle>{headerName}</Wrapper.HeaderTitle>
						</Wrapper.Column>
					);
				})}
			</Wrapper.Header>
			{loading ? (
				<Loader />
			) : rowData?.length > 0 ? (
				rowData?.map((data, i) => {
					return (
						<Wrapper.Row key={i} onClick={clickRowFunction}>
							{column?.map((v, j) => {
								return <Cell v={v} data={data} key={j} id={i + 1} />;
							})}
						</Wrapper.Row>
					);
				})
			) : rowData?.length === 0 ? (
				<Wrapper.Center>
					No data
					<Wrapper.Img />
				</Wrapper.Center>
			) : null}
		</Wrapper>
	);
};

export default Table;
