import { LockClosedIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios';

export default function Login() {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [credentials, setCredentials] = useState({username: "", password: ""});

    let history = useHistory();
    // let authCheck = () => {
    //   if(isAuthenticated === false)
    //   history.push('/signup')
    // }
    let inputChanged = event => {
      const cred = credentials;
      cred[event.target.name] =  event.target.value;
      setCredentials(cred);
    }
    let login = event => {
      event.preventDefault();
      console.log("hello");
      // axios({
      //   method: 'post',
      //   url: '/login',
      //   data: {
      //       username: 'hmk',
      //       password: 'hmk@123'
      //   },
      //   headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      //   }
      // })
      axios.post('http://localhost:8000/login/', credentials,
      {
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        }
      })
      .then(res => {
        console.log(res);
        history.push('./home')
      })
      .catch(err => {
        console.log(err);
      })
      
    }
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-21 w-auto"
              src="https://d18gf9zcxp8qg0.cloudfront.net/newWebsite/new_logo.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to="/signup">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign Up now!
                </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  onChange={inputChanged}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={inputChanged}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
  
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                onClick={login}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  };