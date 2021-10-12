const initialState = {
    // ProjectForm
    // not in db
    ProjectTitle: "", //
    ProjectLocation: "", //
    BuildingType: "", //
    Sector: "", //

    // in db
    // defaults based off Enricos spreadsheet
    JobNumber: "", //
    Stage: "", //
    SustainabilityChampionEmail: "", //
    ProjectGFA: 0, //

    // harcoded for now
    ProjectBauBaseline: "BAU_01", //
    ServiceLifeBuildingStructureYears: 60, //

    // EmbodiedCarbonForm
    ProjectEmbSupStructure: 0, //
    ProjectEmbSubStructure: 0, //
    ProjectEmbServices: 0, //
    ProjectEmbEnvelope: 0, //
    ProjectEmbIntFinishes: 0, //
    ProjectEmbInOp: 0, //
    ProjectEmbEoL: 0, //

    // energy carbon form
    ProjectOpHvac: 0, //
    ProjectOpLighting: 0, //
    ProjectOpEquTen: 0, //
    ProjectOpOthers: 0, //
    ProjectOpRenewables: 0, //
    ProjectOpGreenPower: 0, //

    // offsets form    
    ProjectOffsetTarget: 0, //
    ProjectOffsetCost: 50, //

    
    // KPI inputs
    ProjectClimateChangeRiskReviewComplete: 0, //
    MajorRisksNotMitigatedFor2050: 5, //
    MajorRisksNotMitigatedFor2070: 5, //

    ProjectTeamEngagement: 0, //
    ProjectClientEngagementDecarbonisation: 0, //
    ProjectClientEngagementResilience: 0, //
    ProjectArupImpactCarbon: 0, //
    ProjectArupImpactResilience: 0, //
    
    // BAU totals
    BauEmbTotal: 0,
    BauOpTotal: 0,

    // embodied reduction
    DesignEmbSupStructureReduction: 0,
    DesignEmbSubStructureReduction: 0,
    DesignEmbServicesReduction: 0,
    DesignEmbEnvelopeReduction: 0,
    DesignEmbIntFinishesReduction: 0,
    DesignEmbInOpReduction: 0,
    DesignEmbEoLReduction: 0,

    // energy reduction
    DesignOpHvacReduction: 0,
    DesignOpLightingReduction: 0,
    DesignOpEquTenReduction: 0,
    DesignOpOthersReduction: 0,

    // Design outputs    
    DesignEmbSupStructure: 0,
    DesignEmbSubStructure: 0,
    DesignEmbServices: 0,
    DesignEmbEnvelope: 0,
    DesignEmbIntFinishes: 0,
    DesignEmbInOp: 0,
    DesignEmbEoL: 0,

    DesignOpHvac: 0,
    DesignOpLighting: 0,
    DesignOpEquTen: 0,
    DesignOpOthers: 0,

    // Design totals
    DesignOpTotal: 0,
    DesignOpRenewables: 0,
    DesignOpEnergyFromGrid: 0,
    DesignOpGreenPower: 0,
    DesignEmbTotal: 0,
    DesignOpTotalFinal: 0,
    DesignEmbTotalReduction: 0,
    DesignOpTotalReduction: 0,
    DesignTotalReduction: 0,
    DesignTotal: 0,
    DesignTotalOffsetsNetZeroCost: 0,
    DesignOffsets: 0,
    GapToZero: 0,
    DesignTotalOffsetsNetZero: 0,

    // BAU benchmarks
    // hardcoded defaults for now
    // BauLifecycle: 60,

    // BauEmbSupStructure: 7,
    // BauEmbSubStructure: 3,
    // BauEmbServices: 1,
    // BauEmbEnvelope: 1.3,
    // BauEmbIntFinishes: 1.9,
    // BauEmbInOp: 8.4,
    // BauEmbEoL: 2.1,

    // BauOpHvac: 50,
    // BauOpLighting: 5,
    // BauOpEquTen: 0,
    // BauOpOthers: 25,

    // BauOpRenewables: 0,

    // BauCreatedByEmail: "Enrico.Zara@arup.com",
    // BauYear: 2020,
    // BauBuildingType: "High Rise",
    // BauSector: "Office",
    // BauLocation: "Sydney, Australia",
    // BauGFA: 30000,

    // non hardcoded values

    BauLifecycle: 0,

    BauEmbSupStructure: 0,
    BauEmbSubStructure: 0,
    BauEmbServices: 0,
    BauEmbEnvelope: 0,
    BauEmbIntFinishes: 0,
    BauEmbInOp: 0,
    BauEmbEoL: 0,

    BauOpHvac: 0,
    BauOpLighting: 0,
    BauOpEquTen: 0,
    BauOpOthers: 0,

    BauOpRenewables: 0,

    BauCreatedByEmail: "",
    BauYear: 0,
    BauBuildingType: "",
    BauSector: "",
    BauLocation: "",
    BauGFA: 0,

    // carbon summary
    SummaryEnergyDemandInOperation: 0,
    SummaryOnSiteRenewables: 0,
    SummaryGreenPower:0,
    SummaryEmbodiedCarbon: 0,
    SummaryOffsets: 0,
    SummaryGapToZero: 0,


}

const applyCalculations = (state) => {
    console.log(state)
    state.BauEmbTotal = state.BauEmbSupStructure + state.BauEmbSubStructure + state.BauEmbServices + state.BauEmbEnvelope + state.BauEmbIntFinishes + state.BauEmbInOp + state.BauEmbEoL;
    state.BauOpTotal = state.BauEmbEoL + state.BauOpOthers + state.BauOpEquTen + state.BauOpLighting + state.BauOpHvac;

    // calculate embodied reductions    
    state.DesignEmbSupStructureReduction = state.ProjectEmbSupStructure * state.BauEmbSupStructure;
    state.DesignEmbSubStructureReduction = state.ProjectEmbSubStructure * state.BauEmbSubStructure;
    state.DesignEmbServicesReduction = state.ProjectEmbServices * state.BauEmbServices;
    state.DesignEmbEnvelopeReduction = state.ProjectEmbEnvelope * state.BauEmbEnvelope;
    state.DesignEmbIntFinishesReduction = state.ProjectEmbIntFinishes * state.BauEmbIntFinishes;
    state.DesignEmbInOpReduction = state.ProjectEmbInOp * state.BauEmbInOp;
    state.DesignEmbEoLReduction = state.ProjectEmbEoL * state.BauEmbEoL;

    // calculate energy reductions
    state.DesignOpHvacReduction = state.ProjectOpHvac * state.BauOpHvac;
    state.DesignOpLightingReduction = state.ProjectOpLighting * state.BauOpLighting;
    state.DesignOpEquTenReduction = state.ProjectOpEquTen * state.BauOpEquTen;
    state.DesignOpOthersReduction = state.ProjectOpOthers * state.BauOpOthers;

    // Design calculation    
    state.DesignEmbSupStructure = state.BauEmbSupStructure - state.DesignEmbSupStructureReduction;
    state.DesignEmbSubStructure = state.BauEmbSubStructure - state.DesignEmbSubStructureReduction;
    state.DesignEmbServices = state.BauEmbServices - state.DesignEmbServicesReduction;
    state.DesignEmbEnvelope = state.BauEmbEnvelope - state.DesignEmbEnvelopeReduction;
    state.DesignEmbIntFinishes = state.BauEmbIntFinishes - state.DesignEmbIntFinishesReduction;
    state.DesignEmbInOp = state.BauEmbInOp - state.DesignEmbInOpReduction;
    state.DesignEmbEoL = state.BauEmbEoL - state.DesignEmbEoLReduction;

    state.DesignOpHvac = state.BauOpHvac - state.DesignOpHvacReduction;
    state.DesignOpLighting = state.BauOpLighting - state.DesignOpLightingReduction;
    state.DesignOpEquTen = state.BauOpEquTen - state.DesignOpEquTenReduction;
    state.DesignOpOthers = state.BauOpOthers - state.DesignOpOthersReduction;

    // sum of (DesignOpHvac DesignOpLighting DesignOpEquTen DesignOpOthers)
    state.DesignOpTotal = state.DesignOpHvac + state.DesignOpLighting + state.DesignOpEquTen + state.DesignOpOthers;
 
    // -1 * ProjectOpRenewables * sum of (DesignOpHvac DesignOpLighting DesignOpEquTen DesignOpOthers)
    state.DesignOpRenewables = -1 * state.ProjectOpRenewables * (state.DesignOpHvac + state.DesignOpLighting + state.DesignOpEquTen + state.DesignOpOthers);
 
    // sum of (DesignOpHvac DesignOpLighting DesignOpEquTen DesignOpOthers) + DesignOpRenewables
    state.DesignOpEnergyFromGrid = state.DesignOpRenewables + (state.DesignOpHvac + state.DesignOpLighting + state.DesignOpEquTen + state.DesignOpOthers);
 
    // -1 * ProjectOpGreenPower * DesignOpEnergyFromGrid
    state.DesignOpGreenPower = -1 * state.DesignOpEnergyFromGrid * state.ProjectOpGreenPower;
 
    // sum of above "Emb" variables
    state.DesignEmbTotal = state.DesignEmbSupStructure + state.DesignEmbSubStructure + state.DesignEmbServices + state.DesignEmbEnvelope + state.DesignEmbIntFinishes + state.DesignEmbInOp + state.DesignEmbEoL;
 
    // sum of above DesignOpGreenPower and DesignOpEnergyFromGrid
    state.DesignOpTotalFinal = state.DesignOpEnergyFromGrid + state.DesignOpGreenPower;
 
    // BauEmbTotal minus DesignEmbTotal
    state.DesignEmbTotalReduction = state.BauEmbTotal - state.DesignEmbTotal;
 
    // BauOpTotal minus DesignOpTotalFinal
    state.DesignOpTotalReduction = state.BauOpTotal - state.DesignOpTotalFinal;
 
    // (DesignEmbTotalReduction + DesignOpTotalReduction) divided by (BauEmbTotal + BauOpTotal)
    state.DesignTotalReduction = (state.DesignEmbTotalReduction + state.DesignOpTotalReduction) / (state.BauEmbTotal + state.BauOpTotal);
    
    // DesignEmbTotal + DesignOpTotalFinal
    state.DesignTotal = state.DesignEmbTotal + state.DesignOpTotalFinal;
 
    // (DesignTotal * ProjectGFA * ServiceLifeBuildingStructureYears) / (1000 * ProjectOffsetCost)
    state.DesignTotalOffsetsNetZeroCost = state.DesignTotal * state.ProjectGFA * state.ServiceLifeBuildingStructureYears / 1000 * state.ProjectOffsetCost;
 
    // -1 * (DesignTotal * ProjectOffsetTarget)
    state.DesignOffsets = -1 * (state.DesignTotal * state.ProjectOffsetTarget);
 
    // -1 * (DesignTotal + DesignOffsets)
    state.GapToZero = -1 * (state.DesignTotal + state.DesignOffsets);
 
    // (DesignTotal + DesignOffsets)
    state.DesignTotalOffsetsNetZero = (state.DesignTotal + state.DesignOffsets);

    state.SummaryEnergyDemandInOperation = state.ServiceLifeBuildingStructureYears * state.DesignOpTotal;
    state.SummaryOnSiteRenewables = state.ServiceLifeBuildingStructureYears * state.DesignOpRenewables;
    state.SummaryGreenPower = state.ServiceLifeBuildingStructureYears * state.DesignOpGreenPower;
    state.SummaryEmbodiedCarbon = state.ServiceLifeBuildingStructureYears * state.DesignEmbTotal;
    state.SummaryOffsets = state.ServiceLifeBuildingStructureYears * state.DesignOffsets;
    state.SummaryGapToZero = state.ServiceLifeBuildingStructureYears * (state.SummaryEnergyDemandInOperation + state.SummaryOnSiteRenewables + state.SummaryGreenPower + state.SummaryEmbodiedCarbon + state.SummaryOffsets);
    return state;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'update':
          
        return {
            ...state,
            [action.key]: action.payload
        }

      case 'recalculate':
        state = applyCalculations(state);
        return state;

      default:
        return state
    }
  }

  export default reducer