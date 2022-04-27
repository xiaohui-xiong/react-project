import { Route, Switch, Redirect } from 'react-router-dom'
import routes from '@/views'

function renderRoutes () {
    let result = []
        routes.map(ele=>{
            if (ele.children){
                ele.children.map(ele=>{
                    result.push(
                        <Route key={ele.id} path={ele.path} component={ele.component} />
                    )
                })
            }
        })
    return result

}


export default () => {
    return (
        <div className='content'>
            <Switch>
                {renderRoutes()}
                <Redirect from='*' to='/good/list' />
            </Switch>
        </div>
    )
}