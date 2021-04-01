build:
	docker build -t peakshift_site .

serve:
	docker run -v ${PWD}:/app -v ${PWD}/vendor/bundle:/usr/local/bundle -p 4000:4000 -it --rm --name your_jekyll_project peakshift_site
