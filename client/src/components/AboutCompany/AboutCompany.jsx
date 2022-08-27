import React, {useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from './AboutCompany.module.scss';

 export default function SimpleAccordion (){
   const [showMore, setShowMore]=useState(false)

     return(
         <Container sx={{ bgcolor: "text.btnText" }}>
             {!showMore? <div className={style.contentWrapper}>
                 <Typography variant="h6" component="h2" color="text.secondary" fontSize='24px' sx={{marginBottom: "9px"}}>
                     Order sushi in Kyiv
                 </Typography>
                 <Typography variant="h6" component="h2" color="text.secondary" fontSize='24px' sx={{marginBottom: "9px"}}>
                     The best sushi delivery in Kyiv for everyone
                 </Typography>
                 <Typography variant="h6" component="h2" color="text.secondary" fontSize='18px' sx={{marginBottom: "9px"}}>
                     When you think of sushi, you probably have an image of a vacation in the Far
                     East or a scene from a movie where the main character is sitting in a restaurant,
                     and Asian dishes literally pour like water on a client sitting at a high table.
                     But you don&apos;t have to wait for a trip to the Far East, you can enjoy the taste of
                     great sushi right now! It&apos;s time to try a treat that is usually associated with Japan,
                     although the Chinese were the first to cook it. You can order sushi in Kyiv with delivery
                     and enjoy it right at home. Surprise your friends who came to visit you or arrange a romantic
                     evening with your soulmate. The combination of boiled rice and raw fish, delivered to your
                     chosen address, can also be a decoration for a family celebration or a business lunch.
                 </Typography>
                 <div className={style.btn}>
                     <Button onClick={()=>{setShowMore(!showMore)}} type='button' sx={{alignItems: "center"}}> show more <ExpandMoreIcon/></Button>
                 </div>
             </div>: <div  className={style.contentWrapper}>
                 <Typography variant="h6" component="h2" color="text.secondary" fontSize='24px' sx={{marginBottom: "9px"}}>
                     Order sushi in Kyiv
                 </Typography>
                 <Typography variant="h6" component="h2" color="text.secondary" fontSize='24px' sx={{marginBottom: "9px"}}>
                     The best sushi delivery in Kyiv for everyone
                 </Typography>
                 <Typography variant="h6" component="h2" color="text.secondary" fontSize='18px' sx={{marginBottom: "9px"}}>
                     When you think of sushi, you probably have an image of a vacation in the Far
                     East or a scene from a movie where the main character is sitting in a restaurant,
                     and Asian dishes literally pour like water on a client sitting at a high table.
                     But you don&apos;t have to wait for a trip to the Far East, you can enjoy the taste of
                     great sushi right now! It&apos;s time to try a treat that is usually associated with Japan,
                     although the Chinese were the first to cook it. You can order sushi in Kyiv with delivery
                     and enjoy it right at home. Surprise your friends who came to visit you or arrange a romantic
                     evening with your soulmate. The combination of boiled rice and raw fish, delivered to your
                     chosen address, can also be a decoration for a family celebration or a business lunch.
                 </Typography>
                 <Typography variant="h6" component="h2" color="text.secondary" fontSize='24px' sx={{marginBottom: "9px"}}>
                     Sushi delivery in Kyiv
                 </Typography>
                 <Typography  variant="h6" component="h2" color="text.secondary" fontSize='18px' sx={{marginBottom: "9px"}}>
                     Sushi was introduced to the West in the early 1900s by Japanese immigration after the Meiji
                     Restoration. However, it was not popular among the population outside of the upper class,
                     and as Japanese immigration declined in the late 1900s, it became much less common. Sushi
                     re-emerged a few years after the end of World War II, when Japan re-opened to international
                     trade, tourism and business.<br/>
                     To help Europeans get used to the idea of eating sushi, many restaurants have begun experimenting
                     with new flavor combinations and sushi rolls. One of the most popular rolls was the now ubiquitous
                     California roll, which is an inside-out Makizushi roll with cucumber, crab meat (or imitation crab
                     meat), and avocado topped with white rice.<br/>
                     Despite the fact that sushi is considered one of the haute oriental dishes, sushi lovers do not
                     need to plan a trip to Japan, because in the modern world you can simply order a portion of
                     Japanese seafood right in Kyiv. Sushi in Kyiv is incredibly popular and is in first place in
                     terms of the number of orders for delivery. In Kyiv, which is both the capital of Ukraine and
                     its economic heart, there is no lack of opportunities, but very often there is a lack of time.
                     If you are hungry and urgently want to treat yourself to something tasty, then sushi delivery in
                     Kyiv is exactly what you need. Delicious and hearty sushi will quickly energize you. You can also
                     order sushi not only home but also directly to the office. This gourmet Asian dish is an
                     interesting alternative to typical catering,<br/>
                     &quot;Sushi and Noodles&quot; is the largest delivery network for the most delicious food in Ukraine.
                     We have already gained trust and popularity among customers in the largest cities, namely Kharkov,
                     Odessa, Dnipro and Kyiv. “Sushi and Noodles” offers not just sushi delivery in Kyiv, we offer
                     delicious and healthy dishes at a bargain price.
                 </Typography>
                 <div className={style.btn}>
                     <Button onClick={()=>{setShowMore(!showMore)}} type='button'> show less <ExpandLessIcon/></Button>
                 </div>
             </div>}

</Container>
     )
 }