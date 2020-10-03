const FleetRegister = require("../model/FleetRegister");
const { extractConditionAndComment } = require("../utilities/utility");


const registerVehicle = async (req, res) => {
    // getting details of request body
    const {  engine_check, electrical_check, mirror_check, tire_check, general_check } = req.body;
    // engine - extracting condition and comments
    const { oil_levels, radiator_fluid, clutch_break_fluid, fan_belt_tightness, exhaust_pipe, fuel_tank_cap_and_leaks} = engine_check;
    const { condition: oilLevelCondition , comment: oilLevelComment } = extractConditionAndComment(oil_levels);
    const { condition: radiatorFluidCondition , comment: radiatorFluidComment } = extractConditionAndComment(radiator_fluid);
    const { condition: clutchCondition , comment: clutchComment } = extractConditionAndComment(clutch_break_fluid);
    const { condition: fanBeltCondition , comment: fanBeltComment } = extractConditionAndComment(fan_belt_tightness);
    const { condition: exhaustPipeCondition , comment: exhaustPipeComment } = extractConditionAndComment(exhaust_pipe);
    const { condition: fuelTankCondition , comment: fuelTankComment } = extractConditionAndComment(fuel_tank_cap_and_leaks);
    
    //electrical 
    const { headlights, sidelights, indicator_and_brake_lights, number_plate_and_reverse_brakes} = electrical_check;
    const { condition: headlightsCondition , comment: headlightsComment } = extractConditionAndComment(headlights);
    const { condition: sidelightsCondition , comment: sidelightsComment } = extractConditionAndComment(sidelights);
    const { condition: indicatorLightsCondition , comment: indicatorLightsComment } = extractConditionAndComment(indicator_and_brake_lights);
    const { condition: numberplatesCondition , comment: numberplatesComment } = extractConditionAndComment(number_plate_and_reverse_brakes);

    // mirror check
    const {windscreen, side_mirrors, rear_view_mirrors} = mirror_check;
    const { condition: windscreenCondition , comment: windscreenComment } = extractConditionAndComment(windscreen);
    const { condition: sidemirrorsCondition , comment: sidemirrorsComment } = extractConditionAndComment(side_mirrors);
    const { condition: rearviewmirrorsCondition , comment: rearviewmirrorsComment } = extractConditionAndComment(rear_view_mirrors);

    // tire check
    const { pressure, tread, spare_wheel, jack_and_spanner } = tire_check;
    const { condition: pressureCondition , comment: pressureComment } = extractConditionAndComment(pressure);
    const { condition: treadCondition , comment: treadComment } = extractConditionAndComment(tread);
    const { condition: spareWheelCondition , comment: spareWheelComment } = extractConditionAndComment(spare_wheel);
    const { condition: jackAndSpannerCondition , comment: jackAndSpannerComment } = extractConditionAndComment(jack_and_spanner);
    
    // general check
    const { first_aid_kit, triangles, extinguisher, radio } = general_check;
    const { condition: firstAidCondition , comment: firstAidComment } = extractConditionAndComment(first_aid_kit);
    const { condition: trianglesCondition , comment: trianglesComment } = extractConditionAndComment(triangles);
    const { condition: extinguisherCondition , comment: extinguisherComment } = extractConditionAndComment(extinguisher);
    const { condition: radioCondition , comment: radioComment } = extractConditionAndComment(radio);
    try {
        const registeredVehicle = new FleetRegister({
            ...req.body,
            engine_check: {
                oil_levels: {
                    condition: oilLevelCondition,
                    comment: oilLevelComment
                },
                radiator_fluid: {
                    condition: radiatorFluidCondition,
                    comment: radiatorFluidComment
                },
                clutch_break_fluid: {
                    condition: clutchCondition,
                    comment: clutchComment
                },
                fan_belt_tightness: {
                    condition: fanBeltCondition,
                    comment: fanBeltComment
                },
                exhaust_pipe: {
                    condition: exhaustPipeCondition,
                    comment: exhaustPipeComment
                },
                fuel_tank_cap_and_leaks: {
                    condition: fuelTankCondition,
                    comment: fuelTankComment
                }
            },
            electrical_check: {
                headlights: {
                    condition: headlightsCondition,
                    comment: headlightsComment
                },
                sidelights: {
                    condition: sidelightsCondition,
                    comment: sidelightsComment
                },
                indicator_and_brake_lights: {
                    condition: indicatorLightsCondition,
                    comment: indicatorLightsComment
                },
                number_plate_and_reverse_brakes: {
                    condition: numberplatesCondition,
                    comment: numberplatesComment
                }
            },
            mirror_check: {
                windscreen: {
                    condition: windscreenCondition,
                    comment: windscreenComment
                },
                side_mirrors: {
                    condition: sidemirrorsCondition,
                    comment: sidemirrorsComment
                },
                rear_view_mirrors: {
                    condition: rearviewmirrorsCondition,
                    comment: rearviewmirrorsCondition
                }
            },
            tire_check: {
                pressure: {
                    condition: pressureCondition,
                    comment: pressureComment
                },
                tread: {
                    condition: treadCondition,
                    comment: treadComment
                },
                spare_wheel: {
                    condition: spareWheelCondition,
                    comment: spareWheelComment
                },
                jack_and_spanner: {
                    condition: jackAndSpannerCondition,
                    comment: jackAndSpannerComment
                }
            },
            general_check: {
                first_aid_kit: {
                    condition: firstAidCondition,
                    comment: firstAidComment
                },
                triangles: {
                    condition: trianglesCondition,
                    comment: trianglesComment
                },
                extinguisher: {
                    condition: extinguisherCondition,
                    comment: extinguisherComment
                },
                radio: {
                    condition: radioCondition,
                    comment: radioComment
                }
            }
        });
        await registeredVehicle.save();
        res.status(201).send(registeredVehicle);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

const getVehicleDetailsByReg = async (req, res) => {
    const { vehicleRegistration } = req.params;
    try {
        const registeredVehicle = await FleetRegister.findOne({ vehicle_registration: vehicleRegistration });
        if (registeredVehicle) {
            res.status(200).send(registeredVehicle);
        } else {
            res.status(400).end();
        }
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = {
    registerVehicle,
    getVehicleDetailsByReg
}