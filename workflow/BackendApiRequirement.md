# Backend Requirements

> 1. Json Web Token security
> 2. Express Server
> 3. MongoDB Database
> 4. only Resgisterd user can create Clock & Event

## Require APIs

> 1.  path = ( "/" ), Method = get , Data = ({ time zone , offset})
> 2.  path = ( "/register" ), Method = post , Data = ({username, password , time zone , offset})
> 3.  path = ( "/login" ), Method = post , Data = ({ username, password})
> 4.  path = ( "/clock" ), Method = get , Data = ([ Array of Clocks])
> 5.  path = ( "/clock" ), Method = post , Data = ({clockId , tittle , time zone , offset})
> 6.  path = ( "/clock/id" ), Method = delete, Data =Delete clock
> 7.  path = ( "/clock/id" ), Method = put, Data = ({ tittle , time zone , offset})
> 8.  path = ( "/Event" ), Method = get, Data = ([ Array of Events])
> 9.  path = ( "/Event" ), Method = post, Data = ({id , clockId , tittle , description , date })
> 10. path = ( "/Event/id" ), Method = get, Data = (get Event by Id)
> 11. path = ( "/Event/id" ), Method = put, Data = ({ tittle , description, date})
> 12. path = ( "/Event/id" ), Method = delete, Data = Delete event
