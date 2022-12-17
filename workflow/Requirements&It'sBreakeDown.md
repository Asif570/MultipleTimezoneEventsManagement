# Requirements

> - Create an app where user can login, manage local time zone, manage multiple clocks based on multiple time zones, manage events based on clocks.
> - Time zone will be (GMT , UTC , EST, PST, .........)
> - Base Time zone will be UTC
> - Frontend must be in React Js
> - Backend must be Express
> - Database must be Mangodb

# Requirements Breakdown

> He needs an app where the user can login, he can change his time zone. He will be able to create multiple clocks based on multiple time zones. Each watch can be updated and deleted. Each watch will have multiple events. Each event can be updated and deleted.

## Each Clock Look Like

1. ### Local Clock Look like
   > - Tittle
   > - Local Time
   > - Date
   > - Time zone
2. ### Custom Clock Look like
   > - Tittle
   > - Time
   > - Time zone
   > - Offset
   > - Time difference
   > - Events
3. ### Event Look like
   > - Tittle
   > - Description
   > - Time
   > - Time difference

## Functional Requirements

1. ### Local Clock function
   > - On App load It Show Local Time
   > - Tittle will be fixed
   > - Edit only Time zone
   > - Can not be deleted
   > - Create Custom clocks
2. ### Custom Clock function
   > - Tittle , Time zone , Can be Edited
   > - Clock can be Deleted
   > - Create Events
3. ### Event function
   > \*Tittle ,Time zone , Time can be Edited
   >
   > - Events can be deleted
