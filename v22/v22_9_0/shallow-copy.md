## Shallow Copy


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

{ ...object }                                 | ██████████████████████████████ | 25,045,555 ops/sec
{ ...object, __proto__: null }                | ███--------------------------- | 2,571,898 ops/sec
{ ...object, newProp: true }                  | ████████████████████████████-- | 23,150,413 ops/sec
structuredClone                               | ------------------------------ | 302,764 ops/sec
JSON.parse + JSON.stringify                   | ------------------------------ | 300,643 ops/sec
loop + object.keys starting with {}           | ██---------------------------- | 1,667,136 ops/sec
loop + object.keys starting with { __proto__: null } | █----------------------------- | 893,228 ops/sec
loop + object.keys starting with { randomProp: true } | █----------------------------- | 671,823 ops/sec
object.keys + reduce(FN, {})                  | ██---------------------------- | 1,756,816 ops/sec
object.keys + reduce(FN, { __proto__: null }) | █----------------------------- | 878,325 ops/sec
object.keys + reduce(FN, { newProp: true })   | █----------------------------- | 631,708 ops/sec
```
