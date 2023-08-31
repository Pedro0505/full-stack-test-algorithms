# FullStack Cyclotron Test

### Idea
We want to circulate a particle inside a cyclotron. The particles used are: e, p, n (electron,
proton, and neutron). Each particle has a circulation function within the cyclotron, which can
create either a closed or an open cycle.
Find the algorithm that satisfies the following cases for each particle:

### Input

[particle, matrix] ~> Example: cyclotron(“e”, matrix)

### Outputs

Cyclotron without particles:

[1, 1, 1, 1]

[1, 1, 1, 1]

[1, 1, 1, 1]

[1, 1, 1, 1]

Accelerating an electron:

[e, e, e, e]

[1, 1, 1, e]

[1, 1, 1, e]

[1, 1, 1, e]

Accelerating a proton:

Case: 4x4

[p, p, p, p]

[p, 1, 1, p]

[p, 1, p, p]

[p, p, p, 1]

Case: 6x6

[ p, p, p, p, p, p ]

[ p, 1, 1, 1, 1, p ]

[ p, 1, 1, 1, 1, p ]

[ p, 1, 1, 1, 1, p ]

[ p, 1, 1, 1, p, p ]

[ p, p, p, p, p, 1 ]

Accelerating a neutron:

[n, n, n, n]

[1, 1, 1, 1]

[1, 1, 1, 1]

[1, 1, 1, 1]

## Run application

1. Clone the project

2. Navigate to project folder

3. In root run this:

```bash
$ npm install 
```

3. To run Cyclotron:

```bash
$ npm run run:cyclotron 
```
