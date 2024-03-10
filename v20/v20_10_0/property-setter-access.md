## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|770,553,471|92|
|Setter|12,329,810|94|
|Method|624,377,740|96|
|DefineProperty (setter)|787,075,906|99|
|DefineProperty (setter & enumerable=false)|11,857,243|97|
|DefineProperty (setter & configurable=false)|12,187,316|95|
|DefineProperty (setter & enumerable=false & configurable=false)|12,396,491|93|
|DefineProperty (writable)|789,530,070|98|
|DefineProperty (writable & enumerable=false)|786,359,901|98|
|DefineProperty (writable & enumerable=false & configurable=false)|788,389,583|97|
|DefineProperties (setter)|665,161,617|79|
|DefineProperties (setter & enumerable=false)|12,139,830|96|
|DefineProperties (setter & enumerable=false & configurable=false)|11,759,783|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":770553471.3245991,"samples":6},{"name":"Setter","opsSec":12329809.547294432,"samples":5},{"name":"Method","opsSec":624377739.910085,"samples":7},{"name":"DefineProperty (setter)","opsSec":787075906.2082205,"samples":5},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11857242.837543959,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":12187315.838368326,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12396490.871267611,"samples":4},{"name":"DefineProperty (writable)","opsSec":789530069.9986111,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":786359901.186459,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":788389582.8332275,"samples":6},{"name":"DefineProperties (setter)","opsSec":665161616.5111784,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12139829.709661003,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11759783.15015363,"samples":5}]}-->
