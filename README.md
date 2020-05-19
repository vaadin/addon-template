# Add-on project

An empty project for creating an add-on. You should start from this project if your add-on's components are based on the exsisting Vaadin classes or doesn't use 3rd party JavaScript modules. For creating a wrapper for a JS module you might want to use a [Component Starter](https://github.com/vaadin/component-starter-flow) instead.

## Development instructions

### Deployment

Starting the test/demo server:
```
mvn jetty:run
```

This deploys demo at http://localhost:8080

### Integration test

To run Integration Tests, execute `mvn verify -Pit`.

### Branching information

* `master` the latest version of the starter, using latest platform snapshot
* `v14` the version for Vaadin 14, which is the newest LTS  
* `v13` the version for Vaadin 13

### Others

If you are using static resources such as images, JS and CSS files the correct location for them is under the `/src/main/resources/META-INF/resources/frontend` directory and is described here [Resource Cheat Sheet](https://vaadin.com/docs/v14/flow/importing-dependencies/tutorial-ways-of-importing.html#resource-cheat-sheet)in more details.
