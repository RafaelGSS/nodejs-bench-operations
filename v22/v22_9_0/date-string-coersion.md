## Date String coersion


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using String()                                | ████████████████████████------ | 919,622 ops/sec
Using brackets {}                             | ████████████████████████------ | 932,075 ops/sec
Using '' +                                    | █████████████████████████----- | 980,936 ops/sec
Using date.toString()                         | ██████████████████████████████ | 1,166,219 ops/sec
```
