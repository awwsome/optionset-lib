## 사용

-   optionset window을 생성하는 방법.

```jsx
import { OptionsetWidget } from ".../optionset-lib.js";

function test_loading_optionset_widget() {
    console.log("Optionset Library");

    const widget = new OptionsetWidget({
        target: document.getElementById("target"),
        props: {
            partnerId: "motion1",
            key: "Yo9xaoxnftup48c1bEj0", // 발행된 optionset id
            stateSnapshot: null, // 이 값이 있으면 해당 값으로 ui가 셋팅되어 표시됨.
            callback: callback,
        },
    });

    /*
		result : {
			state:any,
			output:any
		}
	*/
    let result = widget.getResult();
}
function callback(state: any, output: any) {
    console.log("callback => state:", state);
    console.log("callback => output:", output);
}

// html
<div class="border m-4">
    <div id="target"></div>
</div>;
```

## API

### getResult()

결과값 구조

```json
{
	state: {
		ui : { ... }
	},
	output: {
		optionDigest : { ... },
		fileRequirements : { ... },
		computed : { ... },
		product : { ... },
	}
}
```

Note : Shopicus 장바구니에 저장시 이 결과값을 externalOptionData로 전달한다. 장바구니 서버에서externalOptionData를 저장시 `state`부분은 반드시 저장되어야 하며 `output`은 저장할 필요 없음.

### getState()

결과값 구조

```json
{
	ui : { ... }
}
```

### getOutput()

결과값 구조

```json
{
		optionDigest : { ... },
		fileRequirements : { ... },
		computed : { ... },
		product : { ... },
}
```

### getPrice()

결과값 구조

```json
{
    "print": {
        "cover": 1400,
        "body": 11200
    },
    "paper": 1920,
    "bind": 13850,
    "postprocess": {
        "coating": 1700,
        "endpaper": 1400,
        "cover": 0,
        "total": 3100
    },
    "box": 1000,
    "total": 32470
}
```

### enableComponent(id:string, value:boolean)

해당 컴포넌트를 enable/disable 시킨다.

### setPageCount(id:string, value:number)

id로 지정한 컴포넌트는 page count를 담당하는 컴포넌트로 간주하고 값을 수정한다.

이 컴포넌트의 uiType은 “Input”이어야 한다.

### loadWithStateSnapshot(stateSnapshot: State)

옵션셋을 stateSnapshot 값으로 채워 띄운다.

## Build

### optionset-lib.js

export 구조

```jsx
// apps/builder/src/lib/index.js

export { default as OptionsetWidget } from "./export/optionset-widget.svelte";
```

-   getPrice()는 server call를 통해 가격을 받아 제공한다.

### optionset-node-lib.js

export 구조

```jsx
// apps/builder/src/lib/index-nodelib.js

import { getOptionsetOutput } from "./export-for-node/optionset-output-api";
export { getOptionsetOutput };
```

optionset-server에서 사용함.

-   [https://optionset-server-dot-shopicus-option-builder.du.r.appspot.com](https://optionset-server-dot-shopicus-option-builder.du.r.appspot.com/hello)
-   http://localhost:9030
