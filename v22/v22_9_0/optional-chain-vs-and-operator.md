## Optional Chain (?) vs && operator


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using optional chain (obj.field?.field2) (Valid) | █████████████████████████████- | 96712026.84 ops/sec
Using optional chain (obj.field?.field2) (undefined) | ██████████████████████████████ | 98964214.68 ops/sec
Using and operator (obj.field && obj.field.field2) (Valid) | █████████████████████████████- | 96504187.38 ops/sec
Using and operator (obj.field && obj.field.field2) (undefined) | █████████████████████████████- | 95310526.94 ops/sec
```
