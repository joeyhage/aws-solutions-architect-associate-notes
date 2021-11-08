# Tech Fundamentals

## Networking Starter Pack

### OSI 7-Layer Model

[https://en.wikipedia.org/wiki/OSI_model](https://en.wikipedia.org/wiki/OSI_model)

💡 A layer 1 device only understands layer 1 whereas a layer 3 device understands layers 1, 2, and 3

#### Media layers

- Physical, data link, network
- Dealing with how data is moved between point A and point B

#### Host layers

- Transport, session, presentation, application
- How data is chunked/grouped and reassembled as well as formatted so it can be understood

#### Physical (layer 1)

##### Overview

- Transmission and reception of raw bit streams (zeros and ones) between a device and a shared physical medium
- Physical medium can be copper (electrical), fiber (light), or WIFI (radio frequency)
- Defines voltage levels, timing, rates, distances, modulation, and connectors

##### Example: Hubs

- Anything which a hub receives on any port is re-transmitted on all other ports, including errors and collisions
- At layer one, no individual device addresses
- If multiple devices transmit at once, a collision occurs and all information is useless
- No media access control. i.e. cannot control which devices are allowed to transmit
- Collisions are almost guaranteed - likelihood increases with # of devices
- layer 1 cannot detect when collisions occur
- layer 1 networks do not scale well
- no device to device communication
- layer 1 is only practical when layer 2 is added on top

#### Data Link (layer 2)

- One of the most critical layers

#### Network (layer 3)



#### Transport (layer 4)



#### Session (layer 5)



#### Presentation (layer 6)



#### Application (layer 7)


