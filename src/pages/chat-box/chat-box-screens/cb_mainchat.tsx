import { Typography, Paper, Divider } from "@mui/material";

export default function CB_MainChat(){
return(
    <>
    <Typography>Chat App - MainChat</Typography>
    <div>
    <Paper className='w-50 my-3'>
       <Typography variant="body1" gutterBottom className='p-2'>
        Hello! How're ya doin'?
      </Typography>
      <Divider/>
              <Typography variant="caption" display="block" gutterBottom className='fst-italic text-secondary p-1'>
       User1 at 06:30pm
      </Typography>
             </Paper>
       <Paper className='w-50 my-3'>
       <Typography variant="body1" gutterBottom className='p-2'>
        I'm good! What about you?
      </Typography>
      <Divider/>
              <Typography variant="caption" display="block" gutterBottom className='fst-italic text-secondary p-1'>
       User2 at 06:31pm
      </Typography>
             </Paper>
       <Paper className='w-50 my-3'>
       <Typography variant="body1" gutterBottom className='p-2'>
       m also doin' great!
      </Typography>
      <Divider/>
              <Typography variant="caption" display="block" gutterBottom className='fst-italic text-secondary p-1'>
       User1 at 06:35pm
      </Typography>
             </Paper>
    </div>
    </>
)
}
