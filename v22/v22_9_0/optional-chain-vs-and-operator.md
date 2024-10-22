## Optional Chain (?) vs && operator


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using optional chain (obj.field?.field2) (Valid) | ██████████████████████████████ | 96,943,234 ops/sec
Using optional chain (obj.field?.field2) (undefined) | █████████████████████████████- | 94,161,607 ops/sec
Using and operator (obj.field && obj.field.field2) (Valid) | ██████████████████████████████ | 97,082,242 ops/sec
Using and operator (obj.field && obj.field.field2) (undefined) | █████████████████████████████- | 93,999,678 ops/sec
```
