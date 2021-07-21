import React, {useState} from 'react'
import Complement from '../components/Menu/complement'
import Title from '../components/Title'
import { SearchIcon } from '@heroicons/react/outline'
import { findClass } from '../utils/findClass'
import axios from 'axios'
import Link from 'next/link'
import Layout from '../components/Layout'

const Busca = ({url}) => {
    //const { data, err} = useSWR('', fetcher)
    const [search, setSearch] = useState({
        search: ''
    })
    const [names, setNames] = useState([])
    const [data, setData] = useState([])

    async function goSearch () {
        const peek = document.querySelector('.peek')
        const searchBar = document.querySelector('.search')
        peek.className += ' hidden'
        const { classes } = findClass(searchBar, 'border-b-0')
        searchBar.className = `${classes} rounded-b-2xl`

        const data = await fetch('', {
            method: 'POST',
            body: search
        })
        console.log(data)
    }

    function changePeek () {
        const peek = document.querySelector('.peek')
        const { classes } = findClass(peek, 'hidden')
        peek.className = `${classes}`
    }

    async function getData () {
        const data = await axios.get(`${url}/institution/search`, 
            {
                params: {
                    n: search.search,
                    limit: 5,
                    peek: true
                },
            })
        
        const names = data.data.map(e => e.name)
            
        setNames(names)
        setData(data.data)
    }

    async function onChangeSearch ({target}) {
        const key = target.name
        const value = target.value

        const searchBar = document.querySelector('.search')
        const { classes } = findClass(searchBar, 'rounded-b-2xl')
        searchBar.className = `${classes} border-b-0`
        changePeek()

        setSearch(old => ({
                ...old,
                [key]:value
            }
        ))
        
        if (search.search.length > 2) await getData()

    }

    return (
			<Layout>
				<React.Fragment>
					<Title title='Buscar' />
					<Complement text='Buscar' />
					<div className='w-full inline-block pt-4'>
						<div className='relative md:mx-auto md:w-1/2 mx-4'>
								<div className='search grid grid-cols-9 p-1 border border-black rounded-t-2xl rounded-b-2xl'>
									<input name='search' className='col-span-8 bg-transparent ml-2 outline-none' placeholder='Buscar...' onChange={onChangeSearch} />
									<SearchIcon className='w-6 mx-auto col-span-1 text-center cursor-pointer' onClick={goSearch} />
								</div>
								{/* {JSON.stringify(response)} */}
							<ul className='peek hidden px-4 absolute z-10 pb-4 bg-white w-full transform -translate-y-1 border-black rounded-b-2xl border-t-0 border'>
								<hr className='border-dashed z-20 mr-2 my-1 border-black'/>
								{names.map(e => {
									let elementSplit = search.search != "" ? e.split(search.search) : search.search
									if (e != "")
									return (
										<li key={e} className='block cursor-pointer' onClick={goSearch}>
											<span className='overflow-ellipsis overflow-hidden w-4/6 sm:w-5/6 inline-block'>
													{elementSplit[0]}
													<b className='font-bold'>{search.search}</b>
													{elementSplit[1]}
											</span>
											<FaSearch className='ml-8 inline-block text-regular mx-auto text-gray-300'/>
										</li>
									)
								})}
							</ul>
						</div>
					</div>
					<div className='w-full mt-4 inline-block md:flex md:grid-cols-3 gap-4 p-4'>
							
							{data.map(e => {
									return (
									<Link href={`/perfil/${e.name.split(" ").join("-").toLowerCase()}` // Scape String to graphics accents (^~`´ç)
									}>
										<a>
											<div className='my-2 md:my-0 rounded-2xl shadow-2xl md:w-full h-72'>
												<div className='h-4/6 rounded-t-2xl bg-cover bg-no-repeat bg-center' style={{
														backgroundImage: "url('https://www.copeltelecom.com/site/wp-content/uploads/2017/02/iStock-532969250.jpg')"}}></div>
												<div className='h-2/6 mx-4 my-1'>
													<h1 className='font-bold text-xl'>{e.name}</h1>
													<span>
															Nossa bio rápida
													</span>
												</div>
											</div>
										</a>
									</Link>
									)
							})}
					</div>
				</React.Fragment>
		</Layout>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            url: process.env.URL_API
        }
    }
}

export default Busca


/*       Importante Lembrar
    - Busca está com bugs :C
    - corrigir quando não houver dados
    - resetar o layout após apagar a busca
*/