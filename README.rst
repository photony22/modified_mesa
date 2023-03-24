Current Modifications: Chart start tick settable from python, generalized chart visualization to include bar charts


## Usage

Include Typ in Chart initialization, i.e. 

```python
orderbook_chart = ChartModule2([{"Type": "bar", "Label": "orderbook_buy", "Color": "Purple"},])


Include start_tick option in model_params in initialization in ModularServer, i.e.

model_params = {
            "simulation_mode": simulation_mode,
            "time_span": time_span,
            "start_tick": 2015,
            "regions": regions,
            "visitors": visitors
        }

ModularServer(
            model_class,
            visualization_elements,
            name,
            model_params
        )
``` 

