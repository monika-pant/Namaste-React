# Namaste-React
package.json is a configuration for NPM
there are two type of dependencies, dev(generally required for developing environment) and prod/normal(Also used in production).
cart(^) vs Tilde(~): The caret symbol (^) is used to specify a version range that allows for updates to the minor version and patch version.
The tilde symbol (~) is used to specify a version range that allows for updates to the patch version.
package.lock: keep track of the version of the packages installed. maintains a hash to make sure whaterver is in my local is deployed on the server too.
Node Module: all the modules we installed via npm i
Transitive dependencies: we installed parcel, but got additional node modules as parcel need them
