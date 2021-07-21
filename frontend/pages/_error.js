import React from 'react'
import Layout from '../components/Layout'

const Error = ({statusCode}) => {
    return (
      <Layout>
				<div className='inline-block w-full'>
					<div className='w-full md:inline-block absolute md:w-3/5'>
					<p className='text-center text-2xl'>
					{
							statusCode ? `Um erro ocorreu no servidor` : `Um erro ocorreu no cliente`
					}
					</p>
					</div>
					
					<div className='absolute hidden md:inline-block md:w-2/5 right-0 top-16 bg-blue-450 h-full'>
					</div>
        </div>
			</Layout>
    )
}

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : error ? error.statusCode : 404
    return {statusCode}
}

export default Error