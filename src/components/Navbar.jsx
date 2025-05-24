export const Navbar = () => {

	return (
		<nav className="navbar navbar-grey">
			<div className="container">
				<h3 className="black-font">Star Wars</h3>
				<div className="ml-auto">
					<div class="dropdown">
						<button class="btn details-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							My Favorites <i class="fa-solid fa-arrow-down"></i>
						</button>
						<ul class="dropdown-menu dropdown-favorites">
							<li className="dropdown-item dropdown-item-favorites black-font">Action</li>
							<li className="dropdown-item dropdown-item-favorites black-font">Another action</li>
							<li className="dropdown-item dropdown-item-favorites black-font">Something else here</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};