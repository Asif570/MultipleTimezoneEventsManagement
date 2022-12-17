const {
  registeruser,
  createClock,
  createEvent,
  deleteClock,
  deleteEvent,
  updateRegisteruser,
  updateClock,
  updateEvent,
  login,
} = require("../db/controller/userController");

const router = require("express").Router();
/** 
##############################################################################################
####################################################################################
#########################################################################
#############################################################
#############################################
*/
/** register a new user route 
 expet an object like {
 timezone:"",
 offset: 00,
 tittle:""
 }
 */
router.post("/register", registeruser);
/**login a user route 
 expet an object like {
name:"",
password:""
}
 */
router.post("/login", login);
/** register a new clock under user route 
 expet an object like {

   clock_timezone:"",
   clock_offset: 00,
   clock_id:"",
   clock_tittle:""
 }
 */
router.post("/clock/:id", createClock);
/** register a new event under user route 
 expet an object like {
   event_id:"",
   event_tittle:"",
   event_description:"",
   clock_id:"",
   date:" "
 }
 */
router.post("/event/:id", createEvent);
/** delete a clock under the user route 
 expet a query uid=""&cid=""
 */
router.get("/clock/", deleteClock);
/** delete a event under the user route 
 expet a query uid=""&eid=""
 */
router.get("/event/", deleteEvent);
/** update the user under user route 
 expet a id params
 & {
  tittle:"",
  timezone:"",
  offset:00
 }
 */
router.put("/register/:id", updateRegisteruser);
/** update a clock under the user route 
 expet a query uid=""&cid=""
  & {
  tittle:"",
  timezone:"",
  offset:00
 }
 */
router.put("/clock", updateClock);
/** update a event under the user route 
 expet a query uid=""&eid=""
  & {
  clock_id:""
  tittle:"",
  description:""
  date:"",
 }
 */
router.put("/event", updateEvent);
module.exports = router;
