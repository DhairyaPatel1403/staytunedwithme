import React from 'react'
import './Blog.css';

export const Blog = () => {
  return (
    <>
<section className="light">
	<div className="container py-2">
        
		<div className="h1 text-center text-dark">Read About ME...</div><br/><br/>










		<article className="postcard light red">
			<a className="postcard__img_link" href="https://www.linkedin.com/feed/update/urn:li:activity:7015222847144898560/">
                <img className="postcard__img" src={require('./p1_image.png')} style={{"height":"350px" , "width":"500px"}}/>	
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title red" style={{"color":"black"}}>Leetcode 100 days badge</h1>
				<div className="postcard__subtitle small">
					<time dateTime="2020-05-25 12:00:00">
						<h5><i className="fas fa-calendar-alt mr-2"></i>Jan 1st 2023</h5>
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play red">
						<a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>








		












	









	</div>
</section>

    </>
  )
}
