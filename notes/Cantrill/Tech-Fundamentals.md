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

#### Data link (layer 2)

- requires layer 1 (OSI higher layers rely on all layers below itself)
- One of the most critical layers because it supports all data transfer
- Detects and mitigates data collisions
- Data link frame: format for sending information over a layer 2 network
- Layer 2 introduces MAC address: uniquely assigned to a piece of hardware
  - two parts: OUI (manufacturer) and network interface controller (NIC) specific
  - MAC address should be globally unique

##### Frame

- **Preamble:** start of the frame
- MAC header
  - **Destination MAC address**
  - **Source MAC address:** allows it to receive replies
  - **Ether type (ET):** the layer 3 protocol is being used. Example: internet protocol (IP)
- Payload
  - the data being sent via the layer 3 protocol
  - 46-1500 bytes
- Frame check sequence (FCS)
  - Cyclic redundancy check (CRC)
  - Allows destination to check for accidental data errors/changes/corruption

##### CSMA/CD

- carrier sense multiple access (CSMA)
  - check for carrier -> if no carrier, layer 1 takes the frame data and transmits
- collision detection (CD)
  - if collision is detected, a jam signal is sent by all devices and a random backoff occurs. Then it retries. Process repeats, with increasing backoffs, if necessary.
- **encapsulation:** wrapping data inside something else (e.g. wrapping data in a frame)
- **Unicast communication:** 1 to 1
- **Broadcase communication**: 1 to all

##### Example: Switches

- Understands layer 2 
- maintains a MAC address table and keeps track of addresses attached to which port
- if it receives a frame and **knows** which port the destination address belongs to, it will send it to that port only
- if it receives a frame and **does not know** which port the destination address belongs to, it will send it to all other ports
- switches store the frame, forward it, and then discard it
- switches do not forward collisions so each port is a separate collision domain which reduces collisions

#### Network (layer 3)



#### Transport (layer 4)



#### Session (layer 5)



#### Presentation (layer 6)



#### Application (layer 7)


