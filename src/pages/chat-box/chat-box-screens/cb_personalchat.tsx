import { Typography, Paper, Divider } from "@mui/material";

export default function CBPersonalChat(){
return(
    <>
    <Typography>Chat App - PersonalChat</Typography>
    <div>
    <Paper className='w-50 my-3'>
       <Typography variant="body1" gutterBottom className='p-2'>
        Todo:
        Grocery Shopping,
        Assignment Submission.
      </Typography>
      <Divider/>
              <Typography variant="caption" display="block" gutterBottom className='fst-italic text-secondary p-1'>
       You at 06:00am
      </Typography>
             </Paper>
    </div>
    </>
)
}
