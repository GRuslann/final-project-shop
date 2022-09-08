import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {  Grid, Button, Typography  } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import './style.scss';
import Cart from '../../../Cart/Cart';
import LoginModal from '../../../LoginModal/LoginModal';
import { deleteCustomer, setCustomer, setLogout } from '../../../../store/actions';
import Search from '../../../Search/Search';


function Activities() {
	const [open, setOpen] = React.useState(false);
	const [loginButton, setLoginButton] = React.useState(null);
	const [loginModal, setLoginModal] = React.useState(false);
	const [scroll, setScroll] = React.useState('paper');
	const dispatch = useDispatch();
	const [openSearch, setOpenSearch] = React.useState(false);
	const isLoggedIn = useSelector((state) => state.isLoggedIn);

	const handleOpenSearchClick = () => {
		setOpenSearch(true);
	};

	const handleClickOpen = (type) => {
		setOpen(true);
		setScroll(type);
	};
	const handleLoginOpen = () => {
		setLoginModal(true);
	};

	const handleLogout = () => {
		dispatch(setLogout());
		dispatch(deleteCustomer());
		setLoginButton(
			<LoginIcon
				onClick={handleLoginOpen}
				sx={{
					color: '#1BD741',
					fontSize: '40px',
				}}
			/>
		);
		window.location.reload();
	};

	useEffect(
		() => {
			if (localStorage.getItem('token')) {
				dispatch(setCustomer());
					setLoginButton(
						<LogoutIcon
							onClick={handleLogout}
							sx={{
								color: 'red',
								fontSize: '40px',
							}}
						/>
					);
			} else {
				setLoginButton(
					<LoginIcon
						onClick={handleLoginOpen}
						sx={{
							color: '#1BD741',
							fontSize: '40px',
						}}
					/>
				);
			}
		},
		[localStorage.getItem('token')],
		isLoggedIn
	);

	return (
		<>
			<Cart
				open={open}
				setOpen={setOpen}
				scroll={scroll}
				setScroll={setScroll}
				handleClickOpen={handleClickOpen}
			/>
			<LoginModal
				loginModal={loginModal}
				setLoginModal={setLoginModal}
				handleLoginOpen={handleLoginOpen}
			/>
			<Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
			<Grid item container lg={7} sm={7} alignItems="center">
				<NavLink
					style={{
						textDecoration: 'none',
					}}
					to="/reviews"
				>
					<Typography className="header__links" component="a" href="/">
						Reviews
					</Typography>
				</NavLink>
				<NavLink
					style={{
						textDecoration: 'none',
					}}
					to="/shipping"
				>
					<Typography className="header__links" component="a" href="/">
						Shipping and payment
					</Typography>
				</NavLink>
			</Grid>
			<Grid container item justifyContent="space-evenly" sm={4}>
				<Button
					className="header__buttons"
					disableRipple
					size="small"
					onClick={() => handleClickOpen('paper')}
				>
					<ShoppingCartIcon
						color="grayColor"
						sx={{
							fontSize: '40px',
						}}
					/>
				</Button>
				<Button className="header__buttons" disableRipple size="small" onClick={handleOpenSearchClick}>
					<SearchIcon
						color="grayColor"
						sx={{
							fontSize: '40px',
						}}
					/>
				</Button>
				<Button className="header__buttons" disableRipple size="small">
					{loginButton}
				</Button>
			</Grid>
		</>
	);
}

export default Activities;
