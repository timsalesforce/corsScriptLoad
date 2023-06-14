# W-13587191 Farmers Group, Inc. - RCA for W-13497257 - Facing CORS error while connecting to trusted third-party JavaScript API through lightning

Customer started seeing errors loading 3rd parth scripts from a static resource using a script element.

## Repro

1. Clone this repo
2. Deploy to org (might have to forceoverwrite)
3. Add CSP entry for https://cdnjs.cloudflare.com, and check connect-src
4. Open an Account (maybe create one first)
5. Observe CORs error in console

The static resource being loaded by the LWC on the flexipage is also creating a script element with the src being from the 3rd party.  The script element is converted to a fetch call by LWS, and it adds credentials: 'include'.  But the 3rd party domain is sending Access-Control-Allow-Origin: '*' which is not allowed.
